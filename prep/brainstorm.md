# Brainstorm

## Application Concepts

- To-do

- Quotes

- Mood Monitoring

## Chosen Concept: "Mood Monitoring"

- **Interim Name**: "Perfect Day"
- **Goal**: comprised of features that aid with maintaining a good/happy mood throughout day
- **Brainstorm Features**:
  - mood reading?
  - **picture recommendations? (by mood)**
  - book recommendations
  - **music recommendations (by mood)**
  - movie recommendations
  - locations to visit (by mood)
  - **motivational quotes (by mood)**
  - activities to do (by mood)
- **Top 3 Features (to begin with)**:
  - motivational quotes
  - music recommendations
  - picture recommendations

# Research

## Motivational Quotes

### What:

- should provide motivational quotes on demand
- should provide motivational quotes matching a "mood"
- should provide motivational quotes according to category

### How:

| Choice | API       | Access Level Reqs | Access Level Reqs                                                 |
| ------ | --------- | ----------------- | ----------------------------------------------------------------- |
|        | ZenQuotes | Free Tier         | https://premium.zenquotes.io/zenquotes-documentation/#call-quotes |
|        | Quotable  | Free Tier         | https://github.com/lukePeavey/quotable                            |
|        | Go Quotes | Free Tier         | https://goquotes.docs.apiary.io/#                                 |

## Picture Recommendations

### What:

- should provide high quality images on demand
- should provide high quality images matching a "mood"
- should provide high quality images according to category

### How:

| Choice | API      | Access Level Reqs             | Access Level Reqs                         |
| ------ | -------- | ----------------------------- | ----------------------------------------- |
| Y      | Pexels   | Free Tier                     | https://www.pexels.com/api/documentation/ |
| N      | Unsplash | Free Tier (registration req.) | https://unsplash.com/documentation        |
| N      | Imgur    | Free Tier (registration req.) | https://apidocs.imgur.com/                |

## Music Recommendations

### What:

- should provide curated music recommendations on demand
- should provide curated music recommendations matching a "mood"
- should provide curated music recommendations according to category

### How:

| Choice | API     | Access Level Reqs | Access Level Reqs                             |
| ------ | ------- | ----------------- | --------------------------------------------- |
| Y      | YouTube | Free Tier         | https://developers.google.com/youtube/v3/docs |
