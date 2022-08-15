import React from 'react';
import Styles from './ModuleCssComp1.module.css'

export const ModuleCssCompOne = () => {
  
  return (
   <>
    <div className={Styles.theme1}>Theme 1 from module css</div>
    <div className='theme1'>Theme 1 from parent</div>
    <div className={Styles.theme2}>Theme2</div>
   </>
  )
}