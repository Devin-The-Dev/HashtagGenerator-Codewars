function generateHashtag(str) {
    if (str == 0) {
        return false;
    }
    let newStr = str.split(" ");
    let tag = "";
    for (i = 0; i < newStr.length; i++) {
        let capWord = newStr[i].replace(newStr[i].charAt(0), newStr[i].charAt(0).toUpperCase());
        tag += capWord;
    }
    const hashtag = "#" + tag;
    if (hashtag.length > 140) {
        return false;
    } else {
        return hashtag;
    }
}