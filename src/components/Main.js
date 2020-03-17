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

  useFrame(() => (mesh1.current.rotation.x = mesh1.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}

      ref={mesh1}
      onClick={e =>{


      props.passState(mesh1.current.color)
    }}
      onUpdate={self => self.material.color=new THREE.Color(props.color)}
      >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  )
}

function Box2(props) {
  // This reference will give us direct access to the mesh
  const mesh2 = useRef()


  useFrame(() => (mesh2.current.rotation.x = mesh2.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh2}
      onClick={e =>{


      props.passState(mesh2.current.color)
    }}
      >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  )
}

function Box3(props) {
  // This reference will give us direct access to the mesh
  const mesh3 = useRef()
  // console.log(props)

  useFrame(() => (mesh3.current.rotation.x = mesh3.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh3}
      onClick={e =>{

      console.log(e)
      props.passState(mesh3.current.color)
    }}
  //
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

    // console.log(value)
    const hex = document.getElementById('hex')
    console.log(hex.innerText)
    if(hex.innerText === value){
      this.setState({colors: [randColor(),randColor(), randColor()], score: this.state.score+1 })
    }
    if(hex.innerText !== value){
      this.setState({colors: [randColor(),randColor(), randColor()], score: this.state.score-1  })
    }
    // console.log(this.state)


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
