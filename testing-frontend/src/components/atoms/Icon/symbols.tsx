const list = [
    {
        id: 'chevron',
        value: `<symbol id="icon-chevron"  viewBox="0 0 266 438">
                <path d="M258.476 235.971L64.132 430.314c-9.373 9.373-24.569 9.373-33.941 0L7.524 407.647c-9.357-9.357-9.375-24.522-.04-33.901L161.505 219 7.484 64.255c-9.335-9.379-9.317-24.544.04-33.901L30.191 7.687c9.373-9.373 24.569-9.373 33.941 0L258.475 202.03c9.373 9.372 9.373 24.568.001 33.941z"/>
                </symbol>`
    },
]

export const getSymbol = (iconId:string) => {
    console.log(list, "symbol list", iconId)
    const item = list.find(item=>item.id === iconId);
    console.log(item, "symbol id")
    return item!.value;
}