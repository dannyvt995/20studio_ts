export default function Loading() {
   console.log("Loading Page Nextjs")
    return(
        <div
        style={{
            position:'fixed',
            top:0,
            left:0,
            width:'100vw',
            height:'100vh',
            background:'red'
        }}>
            <h1>Loading page</h1>
        </div>
    )
  }