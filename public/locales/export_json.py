import polars as pl
import argparse
import json


parser = argparse.ArgumentParser(
    prog='ExportJSON',
    description='Parse CSV translations to JSON'
)
parser.add_argument('csv_file', help='CSV filename')
parser.add_argument('-l', '--lang', help='Language code')


def parse_csv_to_dict(csv_file, lang='en'):
    df = pl.read_csv(csv_file)
    return dict(zip(df['key'], df[lang]))


if __name__ == '__main__':
    args = parser.parse_args()
    data = parse_csv_to_dict(args.csv_file, args.lang)
    j = json.dumps(data, indent=4, ensure_ascii=False)
    with open(f'./{args.lang}/common.json', 'w') as f:
        print(j, file=f)

