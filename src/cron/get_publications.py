
import argparse
import json
from google_scholar_py import CustomGoogleScholarAuthor

def main():
    parser = argparse.ArgumentParser(description='Scrape Google Scholar author data.')
    parser.add_argument('-u', '--user_id', required=True,
                        help='The Google Scholar author user ID to scrape.')
    parser.add_argument('-o', '--output', required=True,
                        help='Output JSON filename.')
    
    args = parser.parse_args()
    
    # Initialize the parser
    parser_instance = CustomGoogleScholarAuthor()
    
    # Scrape author data
    data = parser_instance.scrape_google_scholar_author_data(
        user_id=args.user_id, 
        parse_articles=True, 
        article_pagination=False
    )
    
    # Write to JSON file
    with open(args.output, 'w') as f:
        json.dump(data, f, indent=2)

if __name__ == "__main__":
    main()