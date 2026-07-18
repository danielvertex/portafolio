import sys
import os
import json
import base64

def main():
    if len(sys.argv) < 3:
        print("Usage: python extract-notebook-images.py <path_to_notebook.ipynb> <slug>")
        sys.exit(1)
        
    notebook_path = sys.argv[1]
    slug = sys.argv[2]
    
    if not os.path.exists(notebook_path):
        print(f"Error: File '{notebook_path}' does not exist.")
        sys.exit(1)
        
    with open(notebook_path, 'r', encoding='utf-8') as f:
        try:
            nb = json.load(f)
        except Exception as e:
            print(f"Error reading JSON from notebook: {e}")
            sys.exit(1)
            
    out_dir = os.path.join("public", "thumbnails", "projects", slug)
    os.makedirs(out_dir, exist_ok=True)
    
    img_idx = 1
    extracted_count = 0
    
    for cell in nb.get("cells", []):
        if cell.get("cell_type") == "code":
            for output in cell.get("outputs", []):
                data = output.get("data", {})
                if "image/png" in data:
                    img_data = data["image/png"]
                    # If it's a list, join it
                    if isinstance(img_data, list):
                        img_data = "".join(img_data)
                    # Remove any newlines/whitespace
                    img_data = img_data.strip().replace("\n", "")
                    
                    try:
                        img_bytes = base64.b64decode(img_data)
                        filename = f"img-{img_idx:02d}.png"
                        filepath = os.path.join(out_dir, filename)
                        with open(filepath, "wb") as img_file:
                            img_file.write(img_bytes)
                        print(f"Saved: {filepath}")
                        img_idx += 1
                        extracted_count += 1
                    except Exception as e:
                        print(f"Error decoding/writing image {img_idx}: {e}")
                        
    print(f"Extraction completed. Extracted {extracted_count} images into {out_dir}")

if __name__ == "__main__":
    main()
