text = "google.com"
unique_chars = set(text)
for char in unique_chars:
    print(char, text.count(char))