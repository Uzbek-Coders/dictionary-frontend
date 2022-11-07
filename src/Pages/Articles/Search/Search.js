import React from 'react'
import classes from "./Search.module.css"
function Search() {
  return (
    <div className={classes.cont}>
        <input type="search" aria-labelledby="search-input" className={classes.search} placeholder="Search..."/>
        <div>
            <ul className ={classes.ul}>
                <li><p><button className={classes.btn} onClick="tagCall('grammar')">Grammar</button></p></li>
                <li><p><button className={classes.btn} onClick="tagCall('freelance')">Freelance</button></p></li>
                <li><p><button className={classes.btn} onClick="tagCall('english')">English</button></p></li>
                <li><p><button className={classes.btn} onClick="tagCall('uzbek')">Uzbek</button></p></li>
                <li><p><button className={classes.btn} onClick="tagCall('dictionary')">Dictionary</button></p></li>
                <li><p><button className={classes.btn} onClick="tagCall('new words')">New Words</button></p></li>
                <li><p><button className={classes.btn} onClick="tagCall('learning')">Learning</button></p></li>
                <li><p><button className={classes.btn} onClick="tagCall('motivation')">Motivation</button></p></li>
                <li><p><button className={classes.btn} onClick="tagCall('humor')">Humor</button></p></li>
            </ul>
        </div>
    </div>
  )
}

export default Search