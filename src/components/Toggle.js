import { motion } from 'framer-motion';
import React, { useState } from 'react'

function Toggle({children,title}) {
    const [toggle, settoggle] = useState(false);

    return (
        <motion.div layout onClick={()=>settoggle(!toggle)}>
            <motion.h4 layout className="question">{title}</motion.h4>
            {
                toggle? children : ""
            }
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle
