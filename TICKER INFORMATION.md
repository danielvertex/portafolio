---
layout: page
title: TICKER INFORMATION
description: CS50p FINALPROJECT
img: assets/img/ticker_price.png
importance: 4
category: Python
giscus_comments: true
---

# TICKER INFORMATION

#### Video Demo: [here](https://youtu.be/z2xsYft5r74)

#### Description: This program can graphically provide a 30-day period of adjusted closing price of two stocks as a PNG image and textual ticker information.

## USAGE

The way to choose the desired option is with up and down arrows.

## MENU

### Option 1

#### Compare graphically a period of 30 days of adjusted closing price of two actions

In this option, I decided to use regular expressions to continue in the program until the user enters the date as requested. This way, I could separate the entered data into groups and request it in an organized way from `yfinance`. It also verifies the tickers entered because there are many that may be similar, have no information, or do not exist.  
At the end, it generates an image with a `.png` extension.

### Option 2

#### Business Summary

You must enter a ticker for which it will print the company's full name, sector, and a summary. If the ticker does not exist, it will ask for one again. If it exists but has no summary information, it will notify you.

## APPROACH

I chose to use graphs and request data from a third party to process it. Then, I wanted to make it a bit more graphical and implement a small menu. Regular expressions came in handy to verify the data the user enters.  
This project helped me understand how to start a project, value the importance of reading documentation, and consider alternatives because there are multiple approaches to the same problem. It also allowed me to implement the knowledge acquired throughout the course.

### Functions

#### `main()`

Here, in addition to the main part of the program, you will find option 1 of the program.

#### `menu()`

The menu is located here and returns the user's selection.

#### `menu_option2()`

Handles option 2 of the menu and also calls `ticker_validation()` to validate.

#### `ticker_validation()`

Validates the entered ticker and handles possible errors, such as if the ticker does not exist.

#### `date_verification()`

Uses regular expressions and `datetime` to validate the date entered and handle possible errors, such as dates that have not yet passed, dates that are too old, or dates that do not exist. This function calls the function **`date_process()`**.

#### `date_process()`

Takes the date entered and standardizes it. Thus, in `main()`, option 1, you can set the 30-day period to do your processing.

# Proyecto

```Python
import matplotlib.pyplot as plt
import re
import yfinance as yf
from datetime import date, timedelta, datetime
from simple_term_menu import TerminalMenu
from colorama import Fore, Back, Style, init


def main():
    init(autoreset=True)

    while True:
        selection = menu()
        if selection == ("1. Compare graphically a period of 30 days of adjusted closing price of two actions"):
            gi_date = input(
                "Type the year and the month you want YYYY-MM:\n")
            result, start_date = date_verification(gi_date)
            if result:
                ti_input = input("Insert the symbol of the first action:\n")
                success, ti_info, ti_input = ticker_validation(ti_input)

                while not success:
                    ti_input = input("Invalid ticker, try again: ")
                    success, ti_info, ti_input = ticker_validation(ti_input)

                try:
                    input2 = input("Insert the symbol of the second action:\n")
                    success2, ti_info2, input2 = ticker_validation(input2)

                    while not success2:
                        input2 = input("Invalid ticker, try again: ")
                        success2, ti_info2, input2 = ticker_validation(input2)
                    try:
                        end_date = start_date + timedelta(days=30)


                        tick1 = yf.Ticker(ti_input)
                        tick2 = yf.Ticker(input2)

                        info1 = tick1.info
                        info2 = tick2.info
                        plt.clf()
                        try:
                            lb1 = info1["shortName"]
                        except KeyError:
                            print(
                                Fore.RED + f"No data found, ticker ({ti_input}) may be delisted")

                        try:
                            lb2 = info2["shortName"]
                        except KeyError:
                            print(
                                Fore.RED + f"No data found, ticker ({input2}) may be delisted")

                        try:
                            history = tick1.history(
                                start=start_date, end=end_date, raise_errors=True)
                            plt.plot(history.index,
                                     history["Close"], label=lb1)
                            ticker1 = 1
                            plt.legend(loc="upper left")
                            plt.xlabel("Date")
                            plt.xticks(rotation=45)
                            plt.ylabel("Price (USD)")
                        except (Exception, ValueError):
                            print(
                                Fore.YELLOW + f"there are not aviable data for the ticker {ti_input} in the time solicitated")
                            ticker1 = 0

                        try:
                            history2 = tick2.history(
                                start=start_date, end=end_date, raise_errors=True)
                            plt.plot(history2.index,
                                     history2["Close"], label=lb2)
                            ticker2 = 1
                            plt.legend(loc="upper left")
                            plt.xlabel("Date")
                            plt.xticks(rotation=45)
                            plt.ylabel("Price (USD)")
                        except (Exception, ValueError):
                            print(
                                Fore.YELLOW + f"there are not aviable data for the ticker {input2} in the time solicitated")
                            ticker2 = 0

                        #only hasthe second asked ticker
                        if ticker1 == 1 and ticker2 == 0:
                            plt.title(
                                f"{ti_info["shortName"]} ({ti_info["symbol"]})")
                            plt.savefig(
                                "result.png", bbox_inches="tight")
                            print(
                                Back.GREEN + "Image genereted with 1 ticker 😐\nImage saved as \033[1;4mresult.png\033\n ")
                        #only has the first ticker
                        elif ticker1 == 0 and ticker2 == 1:
                            plt.title(
                                f"{ti_info2['shortName']} ({ti_info2['symbol']})")
                            plt.savefig(
                                "result.png", bbox_inches="tight")
                            print(
                                Back.GREEN + "Image genereted with 1 ticker 😐\nImage saved as \033[1;4mresult.png\033\n ")
                        #no ticker
                        elif ticker1 == 0 and ticker1 == 0:

                            print(Back.YELLOW + "No image generated ☹️")

                        else:
                            plt.legend(loc="upper left")
                            plt.xlabel("Date")
                            plt.xticks(rotation=45)
                            plt.ylabel("Price (USD)")
                            plt.title(f"{ti_info['shortName']} ({ti_info['symbol']}) and {
                                ti_info2['shortName']} ({ti_info2['symbol']})")
                            plt.savefig(
                                "result.png", bbox_inches="tight")
                            print(
                                Back.GREEN + "Image succesfully genereted with 2 tickers😃\nImage saved as \033[1;4mresult.png\033 ")

                    except KeyError:
                        print(
                            Fore.YELLOW + "One or both tickers do not have summary information")

                except KeyError:
                    print(Fore.YELLOW +
                          "One or both tickers do not have summary information")

        if selection == "2. Business Summary":
            menu_option2()

        elif selection == "Exit":
            print("Bye bye ✌️")
            break


def menu():
    options = [
        "1. Compare graphically a period of 30 days of adjusted closing price of two actions",
        "2. Business Summary",
        "Exit",
    ]
    terminal_menu = TerminalMenu(options, title="Menu:")
    menu_entry_index = terminal_menu.show()
    sele = options[menu_entry_index]
    return sele


def menu_option2():
    ti_input = input("Insert the symbol of action:\n")
    success, ti_info, ti_input = ticker_validation(ti_input)

    while not success:
        ti_input = input("Invalid ticker, try again: ")
        success, ti_info = ticker_validation(ti_input)
    try:
        print(Fore.BLUE + f"{ti_info['longName']}")
        print("\033[1;4mSector:\033[0m", ti_info["sector"])
        print("\033[1;4mSummary:\033[0m", ti_info["longBusinessSummary"])

    except KeyError:
        print(Fore.YELLOW + "The ticker does not has summary information")


def ticker_validation(tic):
    while True:
        try:
            info = yf.Ticker(tic).info
            return True, info, tic
        except (ValueError, KeyError) as e:
            if "No data found, symbol may be delisted" in str(e):
                tic = input("Invalid ticker, try again: ")
            else:
                tic = input("Invalid ticker, try again: ")
        except Exception:
            tic = input(f"The ticker probably does not exist, try other: \n")


def date_verification(d):
    while True:
        today_d = datetime.today().strftime("%Y")
        mistak = 0
        try:
            while True:
                if match := re.search(r"(\d\d\d\d)-(\d\d)", d, re.IGNORECASE):
                    if int(today_d) < int(match.group(1)):
                        mistak = 1
                        raise ValueError

                    start_date = date_process(match.group(1), match.group(2))
                    # print(match.group(1))
                    return True, start_date
                else:
                    raise ValueError
        except ValueError:
            if mistak == 1:
                d = input("Ivalid Year or month. Tipe a valid date.\n")
            else:
                d = input("Ivalid date format. Please use YYYY-MM:\n")


def date_process(year_str, month_str):
    year = int(year_str)
    month = int(month_str)
    day = 1
    start_date = date(year, month, day)
    return start_date


if __name__ == "__main__":
    main()

```

# Test para el projecto

```Python
from project import ticker_validation, date_verification, date_process
from datetime import date
import pytest

def test_ticker_validation():
    #si el ticker existe retorna true si no retorna False
    tic = "gabagoo"
    with pytest.raises(Exception):
        ticker_validation(tic)
    ti_input= "ba"
    success, ti_info, updated_ti_input = ticker_validation(ti_input)
    assert success is True


def test_date_verification():
    #si el formato de fecha es correcto, retorna True y start_date
    d = "1999-01"
    test_date = date(1999, 1, 1)
    result, start_date = date_verification(d)
    assert result is True
    assert start_date == test_date

def test_date_process():
    result = date_process("2023", "01")
    assert result == date(2023, 1, 1)
    with pytest.raises(ValueError):
        date_process("2025", "17")
    with pytest.raises(ValueError):
        date_process("asfgoga", "06")

```
