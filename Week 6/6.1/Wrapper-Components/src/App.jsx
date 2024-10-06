
function App() {
  return <div>
    <CardWrapper>
      <CardWrapper>
        <div>
          Hi There
        </div>
      </CardWrapper>
    </CardWrapper>
    <CardWrapper>
      <div>
      Hello There
      </div>
    </CardWrapper>
    <CardWrapper>
      <TextComponent />
    </CardWrapper>
  </div>
}

function CardWrapper({children}) {
  console.log(children)
  //create a div which has a border (hint : the way to create a border is border: "2px solid blakc")
  //and inside the div, renders the prop
  return <div style={{border: "2px solid black", padding: 20}}>
  {children}
  </div>
}
function TextComponent() {
  return (
    <div>
      Hi There from text component
    </div>
  )
}
export default App

