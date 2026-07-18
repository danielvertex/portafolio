import sys
import os
import json
import base64

def main():
    if len(sys.argv) < 3:
        print("Usage: python convert-notebook-to-mdx.py <path_to_notebook.ipynb> <slug> [title] [description]")
        sys.exit(1)
        
    notebook_path = sys.argv[1]
    slug = sys.argv[2]
    title = sys.argv[3] if len(sys.argv) > 3 else slug.replace("-", " ").replace("_", " ").title()
    description = sys.argv[4] if len(sys.argv) > 4 else f"Case study from notebook {slug}."
    
    if not os.path.exists(notebook_path):
        print(f"Error: File '{notebook_path}' does not exist.")
        sys.exit(1)
        
    with open(notebook_path, 'r', encoding='utf-8') as f:
        try:
            nb = json.load(f)
        except Exception as e:
            print(f"Error reading JSON from notebook: {e}")
            sys.exit(1)
            
    # Create directories for images
    img_dir = os.path.join("public", "thumbnails", "projects", slug)
    os.makedirs(img_dir, exist_ok=True)
    
    # We will build the mdx content
    mdx_lines = [
        "---",
        f'title: "{title}"',
        f'description: "{description}"',
        'category: "Data"',
        'status: "Completed"',
        'date: "2026-07-17"',
        f'thumbnail: "/thumbnails/projects/{slug}/img-01.png"', # default to first extracted image
        'images: []',
        'tags: ["Python", "Jupyter", "Data Analysis"]',
        'featured: false',
        "---",
        ""
    ]
    
    img_idx = 1
    
    for cell in nb.get("cells", []):
        cell_type = cell.get("cell_type")
        source = cell.get("source", [])
        if isinstance(source, list):
            source = "".join(source)
            
        if cell_type == "markdown":
            mdx_lines.append(source)
            mdx_lines.append("")
        elif cell_type == "code":
            # Add code cell input
            mdx_lines.append("```python")
            mdx_lines.append(source.rstrip())
            mdx_lines.append("```")
            mdx_lines.append("")
            
            # Check outputs
            for output in cell.get("outputs", []):
                output_type = output.get("output_type")
                
                # Check for standard output / print statement text
                if output_type == "stream":
                    text = output.get("text", [])
                    if isinstance(text, list):
                        text = "".join(text)
                    mdx_lines.append("```text")
                    mdx_lines.append(text.rstrip())
                    mdx_lines.append("```")
                    mdx_lines.append("")
                elif output_type in ("display_data", "execute_result"):
                    data = output.get("data", {})
                    
                    # Text representations
                    if "text/plain" in data and "image/png" not in data:
                        text = data["text/plain"]
                        if isinstance(text, list):
                            text = "".join(text)
                        mdx_lines.append("```text")
                        mdx_lines.append(text.rstrip())
                        mdx_lines.append("```")
                        mdx_lines.append("")
                        
                    # Image representations
                    if "image/png" in data:
                        img_data = data["image/png"]
                        if isinstance(img_data, list):
                            img_data = "".join(img_data)
                        img_data = img_data.strip().replace("\n", "")
                        
                        try:
                            img_bytes = base64.b64decode(img_data)
                            filename = f"img-{img_idx:02d}.png"
                            filepath = os.path.join(img_dir, filename)
                            with open(filepath, "wb") as img_file:
                                img_file.write(img_bytes)
                            
                            # Reference image in MDX
                            mdx_lines.append(f"![Chart {img_idx}](/thumbnails/projects/{slug}/{filename})")
                            mdx_lines.append("")
                            img_idx += 1
                        except Exception as e:
                            print(f"Error saving image: {e}")
                            
    # Save the mdx file
    mdx_path = os.path.join("content", "projects", f"{slug}.mdx")
    with open(mdx_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(mdx_lines))
        
    print(f"Successfully converted notebook to: {mdx_path}")
    print(f"Extracted {img_idx - 1} images to: {img_dir}")

if __name__ == "__main__":
    main()
