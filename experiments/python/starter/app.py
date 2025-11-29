import argparse

parser = argparse.ArgumentParser(description="Starter Python CLI")
parser.add_argument("--name", type=str, help="Your name")
args = parser.parse_args()

if args.name:
    print(f"Hello {args.name}, welcome to your playground!")
else:
    print("Run with --name to personalise this script.")
