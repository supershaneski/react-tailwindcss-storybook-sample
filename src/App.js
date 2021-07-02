import React, { useState } from 'react';
import ControlLabel from './components/ControlLabel';
import Person from './components/Person';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';
import Textbox from './components/Textbox';

const workList = [
  "Marketing",
  "Advertising",
  "Engineer",
]

const photoList = [
  { name: "Man A", image: "photo_1.jpg" },
  { name: "Man B", image: "photo_2.jpg" },
  { name: "Woman A", image: "photo_3.jpg" },
]

const initialPhoto = 1;
const initialWork = 0;

function App() {
  
  const [user, setUser] = useState({ name: "Jonathan Smith", work: workList[initialWork], image: photoList[initialPhoto].image})
  const [hidePhoto, setHidePhoto] = useState(false)
  const [photo, setPhoto] = useState(initialPhoto)
  const [avatarShape, setAvatarShape] = useState(0)
  const [work, setWork] = useState(initialWork)

  const handleNameChange = (e) => {

    setUser({
      ...user,
      name: e.target.value,
    })

  }

  const handleHideChange = () => {

    const flag = !hidePhoto;

    setHidePhoto(flag)

    setUser({
      ...user,
      image: flag ? "" : photo < photoList.length ? photoList[photo].image : "",
    })

  }

  const handleShapeChange = () => {

    const shape = avatarShape === 0 ? 1 : 0;

    setAvatarShape(shape)

  }

  const handleWorkChange = (w) => {

    setWork(w)
    setUser({
      ...user,
      work: w < workList.length ? workList[w] : "Not found",
    })

  }

  const handlePhotoChange = (p) => {

    const pic = p < photoList.length ? photoList[p].image : "";

    setPhoto(p)
    setUser({
      ...user,
      image: hidePhoto ? "" : pic,
    })

  }

  return (
    <div className="w-screen h-screen bg-gray-50 text-gray-900 p-5 dark:bg-gray-900 dark:text-gray-50">
      <div className="container">
        <Person round={avatarShape === 1 ? true : false} data={user}/>
      </div>
      <div className="container mt-5">
        <h2 className="text-xl font-bold">Customize Card</h2>
        <div className="mb-3">
          <h4 className="mb-1">Name</h4>
          <div>
            <Textbox value={user.name} onChange={handleNameChange}/>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Avatar</h4>
          <div className="mb-1">
            <ControlLabel control={Checkbox} label="Round shape" checked={avatarShape === 1 ? true : false} onChange={handleShapeChange}/>
          </div>
          <div>
            <ControlLabel control={Checkbox} label="Hide photo" checked={hidePhoto} onChange={handleHideChange}/>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Photo</h4>
          {
            photoList.map((item, index) => {
              return (
                <div className="mb-1">
                  <ControlLabel control={Radio} label={item.name} checked={photo === index ? true : false} onChange={() => handlePhotoChange(index)}/>
                </div>
              )
            })
          }
        </div>
        <div className="mb-3">
          <h4 className="mb-1">Work</h4>
          {
            workList.map((item, index) => {
              return (
                <div className="mb-1" key={index}>
                  <ControlLabel control={Radio} label={item} checked={work === index ? true : false} onChange={() => handleWorkChange(index)}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )

}

export default App;
