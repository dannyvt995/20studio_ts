
export function removeSplash(target: string,listPathAndIdDom:any) {
    let value
    if (listPathAndIdDom.pagesWork.includes(target)) {
      value = target.replace(/\/work\//g, "");
  
    } else {
      value = target.replace(/\//g, "");
      if (value == '') value = "home"
    }
  
    return value
}