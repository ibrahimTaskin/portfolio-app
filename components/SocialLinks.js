import React from 'react'
import { socialLinks } from './icons/Icons'

const SocialLinks = () => {
    return (
        <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <a target={"_blank"} href="https://github.com/ibrahimTaskin">
                {socialLinks.github}
              </a>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/ibrahim-ta%C5%9Fk%C4%B1n-4816ba170/"
              >
                {socialLinks.linkedin}
              </a>
              <a
                target={"_blank"}
                href="https://www.hackerrank.com/taskin_ibrahim?hr_r=1"
              >
                {socialLinks.hackkerrank}
              </a>
            </div>
    )
}

export default SocialLinks
