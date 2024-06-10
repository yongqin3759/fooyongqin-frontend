"use client"
import './RobotField.css';
import {useState,useEffect, useCallback} from 'react'

import {Field} from './field/field'

const RobotField = ()=> {
  const [fieldDimensions, changeFieldDimensions]= useState({
    fieldWidth: 9,
    fieldHeight: 9,
  })

  const [coordinates, setcoordinates] = useState('(6,3), (5,2), (3,8)')

  const [robotLocation, setRobotLocation]= useState({
    xPixel:0,
    yPixel:0,
  })

  const [isAnimationComplete, setIsAnimationComplete] = useState(true);

  let updatedFieldDimensions={};

  let coordinatesArray =[]

  useEffect(()=>{
    updatedFieldDimensions=fieldDimensions
  },[fieldDimensions]);

  const nextLocationToPixels = (newCoordinates)=>{
    let xPixel;
    let yPixel;
    xPixel = newCoordinates.shift()*68;
    yPixel = newCoordinates.shift()*65;
    setRobotLocation({xPixel, yPixel});
  }

  

  const handleSubmitCoordinate = (e)=>{
    setValidatedCoordinate(validateCoordinates(coordinates));
  }
  

  const [validatedCoordinate,setValidatedCoordinate] = useState([]);

  const moveRobot = () => {
    if(Number(validatedCoordinate[0])<=(fieldDimensions.fieldWidth-1) || Number(validatedCoordinate[1])<=(fieldDimensions.fieldHeight-1)){
      nextLocationToPixels(validatedCoordinate)
    }
  }

  useEffect(()=>{
    moveRobot();
  }, [validatedCoordinate])
  
  useEffect(()=>{
    if(isAnimationComplete){
      moveRobot();
    }
  }, [isAnimationComplete])

  useEffect(()=>{
    setIsAnimationComplete(false)
  },[robotLocation])

  const validateBrackets=(string)=>{
    if(string.charAt(0)!=="(" && string.charAt(-1)!==")")return true
    return !string.split("").reduce((previous,char)=>{
      if(previous<0){return previous}
      if(char==="("){return ++previous}
      if(char===")"){return --previous}
      return previous
    },0);
  }

  const validateCoordinates =(coordinates)=>{
    validateBrackets(coordinates)
    if(validateBrackets(coordinates)){
      coordinatesArray=coordinates.replace(/\(/g,'').replace(/\)/g,'').split(",");
    }
    return coordinatesArray
  }

  const handleSubmitFieldSize = (e)=>{
    e.preventDefault()
    let coordinates= e.target.querySelector('textarea').value.split(",")
    changeFieldDimensions({fieldWidth:coordinates[0], fieldHeight:coordinates[1]})
  }

  const parentRestCallback = useCallback(() => {
    setIsAnimationComplete(true);
  }, [isAnimationComplete]);

  const [robotSpeed, setRobotSpeed] = useState(90);

  const handleRobotSpeed = e => {
    e.preventDefault()
    const speed = e.target.querySelector('textarea').value
    setRobotSpeed(speed)
  }

  return (
    <div className="RobotField">
      
      <div className="RobotField-header">
      <div className='w-[300px] mr-[760px] text-left text-sm'>

        <h3 className='text-lg font-bold'>Requirements for the project</h3>
        <div class="text-lef  p-6 bg-gray-100 rounded-lg shadow-md">
  <ul class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-gray-700">
    <li>✅</li>
    <li>Draw the position of the robot in a box.</li>
    <li>✅</li>
    <li>Allow the trajectories to be entered via a text box form.</li>
    <li>✅</li>
    <li>
      Animate the movement of the robot moving to the first waypoint.
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Robot should take at least a few seconds to move between waypoints.</li>
        <li>The movement should be smooth.</li>
      </ul>
    </li>
    <li>✅</li>
    <li>Upon completion of each waypoint, the GUI should show the robot moving to subsequent waypoints in the same way.</li>
    <li>✅</li>
    <li>Upon submission of a new trajectory, nullify previous commands, and use the new trajectory instead.</li>
  </ul>
</div>
      </div>
          <Field
            onRestCallback={parentRestCallback}
            isAnimationComplete={isAnimationComplete}
            totalWidth={fieldDimensions.fieldWidth}
            totalHeight={fieldDimensions.fieldHeight}
            xPixels={robotLocation.xPixel}
            yPixels={robotLocation.yPixel}
            robotSpeed={robotSpeed}
            />
        {/* <form className="submit-field-size text-black" onSubmit={(e)=>{handleSubmitFieldSize(e)}}>
          <label>
            Field Size:<br/>
            <textarea>9,9</textarea>
          </label><br/>
          <input type="submit" value="Submit" />
        </form> */}
        <div className="submit-button text-black bg-blue-500  font-bold px-4 rounded text-sm">
          <label className='block mb-2'>
            Coordinates:<br/>
            <input type="text" className="coordinates block mb-0 w-[200px]" value={coordinates} onChange={(e)=>setcoordinates(e.target.value)}/>
          </label>
          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded' onClick={()=>{handleSubmitCoordinate(coordinates)}}>Submit
          </button>
        </div>
        {/* <form className="submit-robot-speed text-black"onSubmit={(e)=>{handleRobotSpeed(e)}}>
          <label>
            Robot Speed:<br/>
            <textarea className="robot-speed">50</textarea>
          </label><br/>
          <input type="submit" value="Submit" onChange={(e)=>{handleRobotSpeed(e)}}/>
        </form> */}
      </div>
    </div>
  );
}

export default RobotField;
