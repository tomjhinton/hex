import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
const THREE = require('three')


function randColor(){
  return '#000000'.replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
}

function Box1(props) {
  // This reference will give us direct access to the mesh
  const mesh1 = useRef()
  // console.log(props)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh1.current.rotation.x = mesh1.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}

      ref={mesh1}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e =>{
      // setHover(false)

      props.passState(mesh1.current.color)
    }}
      onUpdate={self => self.material.color=new THREE.Color(props.color)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  )
}

function Box2(props) {
  // This reference will give us direct access to the mesh
  const mesh2 = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh2.current.rotation.x = mesh2.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh2}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e =>{
      // setHover(false)

      props.passState(mesh2.current.color)
    }}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  )
}

function Box3(props) {
  // This reference will give us direct access to the mesh
  const mesh3 = useRef()
  // console.log(props)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh3.current.rotation.x = mesh3.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh3}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e =>{
      // setHover(false)
      console.log(e)
      props.passState(mesh3.current.color)
    }}
  //     onPointerDown={e =>{
  //     // setHover(false)
  //     console.log("down")
  //     props.passState(mesh3.current.color)
  //   }}
  //   onPointerUp={e =>{
  //   // setHover(false)
  //   console.log('up')
  //   props.passState(mesh3.current.color)
  // }}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  )
}



class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: '',
      score: 0,
      colors: [randColor(),randColor(), randColor()]

    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.passState = this.passState.bind(this)






  }


  componentDidMount(){



  }

  componentDidUpdate(){



  }

  passState(value){

    console.log(value)
    const hex = document.getElementById('hex')
    console.log(hex.innerText)
    if(hex.innerText === value){
      this.setState({colors: [randColor(),randColor(), randColor()], score: this.state.score+1 })
    }
    if(hex.innerText !== value){
      this.setState({colors: [randColor(),randColor(), randColor()], score: this.state.score-1  })
    }
    console.log(this.state)


  }




  render() {



    return (
      <div onMouseMove={this.mouseMove} className="body">
      <div className='hex' id='hex'>{this.state.colors[Math.floor(Math.random()*3)]}</div>
      <div className='score'>Score: {this.state.score}</div>
      <div className='timer'>{}</div>
      <Canvas style={{ background: '#FFFFF' }}  >

      <ambientLight />
   <pointLight position={[10, 10, 10]} />
   <Box1 position={[-2, 0, 0]} color={this.state.colors[0]} passState={this.passState}/>
   <Box2 position={[0, 0, 0]} color={this.state.colors[1]} passState={this.passState}/>
   <Box3 position={[2, 0, 0]} color={this.state.colors[2]} passState={this.passState}/>
   }
      </Canvas>




      </div>




    )
  }
}
export default Main
