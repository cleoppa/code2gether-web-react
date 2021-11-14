import type { NextPage } from 'next'

import styles from './_footer.module.scss'

import { LogoIcon, TwitterIcon, GitHubIcon, DiscordIcon, TwitchIcon } from 'utils/icons'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.leftSection}>
                    <LogoIcon fillColor="white" size={128} />

                    <span>code2gether - Copyright &copy; 2021 - All rights reserved.</span>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.socials}>
                        
                        <div className={styles.socialstext}>
                            <span>Follow us on social media</span>
                            <div className={styles.line}></div>
                        </div>
                        
                        <div className={styles.icons}>
                            <TwitterIcon fillColor="white" size={48} />
                            <GitHubIcon fillColor="white" size={48} />
                            <DiscordIcon fillColor="white" size={48} />
                            <TwitchIcon fillColor="white" size={48} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}