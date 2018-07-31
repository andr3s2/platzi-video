import React from 'react'
import Category from './category'
import './categories.css'
import SearchContainer from '../../widgets/containers/search'
import Media from '../../playlist/components/media'

function Categories (props) {

  return (
    <div className='Categories'>
      <SearchContainer/>
      {
        props.search.map((item) => {
          console.log(item)
          return <Media {...item} key={item.id}/>
        })
      }
      {
        props.categories.map((item) => {
          return <Category handleOpenModal={props.handleOpenModal} key={item.id} {...item}/>
        })
      }
    </div>
  )
}

export default Categories