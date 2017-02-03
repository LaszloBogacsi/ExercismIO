import re

def is_pangram(sentence):
    stripped = stripSentence(sentence)
    alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for i in range(len(alphabet)):
        if not alphabet[i] in stripped:
            return False
    return True

def stripSentence(sentence):
    sentence = sentence.lower()
    result = re.findall(r"[a-zA-Z]", sentence)
    return result
