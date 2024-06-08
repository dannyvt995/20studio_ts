import { listPathAndIdDom } from "@Constants/data_noname"

export const removeSplash = ( {pathName}:{pathName: any}) => {
  let value

  if (listPathAndIdDom.pagesWork.includes(pathName)) {
    value = pathName.replace(/\/work\//g, "");

  } else {
    value = pathName.replace(/\//g, "");
    if (value == '') value = "home"
  }

  return value
}