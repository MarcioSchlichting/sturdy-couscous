const copyToClipboard = async (text: string): Promise<any> => {
    await navigator.clipboard.writeText(text);
}

export default copyToClipboard;