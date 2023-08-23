function cutter(text) {
    const regex = /#:\s*{{ux\|en\|([^}]*)}}/g;
    let boldReg = /(?<=\''')(.*?)(?=\''')/;
    const matches = [];
    while (text.includes("'''")) {
        let matched = boldReg.exec(text);
        let wrap = '<b>' + matched[1] + '</b>';
        text = text.replace(`'''${matched[1]}'''`, wrap);
    }
    let match;
    while ((match = regex.exec(text)) !== null) {
        match[1] = match[1]
            .replaceAll('{{', '')
            .replaceAll('}}', '')
            .replaceAll("[[", '')
            .replaceAll(']]', '')
            .replaceAll("|", ' ')
        matches.push(match[1]);
    }

    return matches

}

export default cutter