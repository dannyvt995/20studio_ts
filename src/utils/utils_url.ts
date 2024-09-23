
export  function formatUrlForIconNavbar({ cur, tar }: { cur: string; tar: string }): { currentPathFormatted: string; targetPathFormatted: string } {

    let currentPathFormatted : string = cur;
    let targetPathFormatted : string = tar;

    const workPaths = ['/work/work1', '/work/work2', '/work/work3', '/work/work4'];

    if (workPaths.includes(cur)) {
      currentPathFormatted = '/work';
    }
  
    if (workPaths.includes(tar)) {
      targetPathFormatted = '/work';
    }
  
    if (tar === '/') {
      targetPathFormatted = '/home';
    }

    if (cur === '/') {
      currentPathFormatted = '/home';
    }

    return { currentPathFormatted, targetPathFormatted };
  }

  export function resetIconNavbarModal({ cur, tar,listTimeline }: { cur: string, tar: string,listTimeline:any }) {

   
    const currentTimeline = cur ? listTimeline[cur] : null;
    const targetTimeline = tar ? listTimeline[tar] : null;
   
    if (currentTimeline && targetTimeline) {
      
     currentTimeline.reversed(!currentTimeline.reversed())
      targetTimeline.reversed(!targetTimeline.reversed())
    } else {
      console.log("Some err on resetIconNavbarModal")
    }


  }