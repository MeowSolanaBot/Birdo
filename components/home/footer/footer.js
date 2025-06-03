// >> Modules
import styles from './footer.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-scroll';

import logo from '@/public/logo.png';
import twitterX from '@/public/images/twitterX.svg';
import telegram from '@/public/images/telegram.svg';

// >> Script
export default function Footer(props) {
	return (
		<div className={styles.section} data-aos="fade-up">
			<div className={styles.inside}>
				<div className={styles.top}>
					<div className={styles.topLeft}>
						<Image
							src={logo}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>

						<Typography>
							$FROGE Discord's cult emoji turns memecoin on BNB.
						</Typography>
					</div>
					<div className={styles.topRight}>
						<Link to="Home" className={styles.link}>
							Home
						</Link>
						<Link to="About" className={styles.link}>
							About
						</Link>
						<Link to="Tokenomics" className={styles.link}>
							Tokenomics
						</Link>
						<Link to="Roadmap" className={styles.link}>
							Roadmap
						</Link>
						<Link to="Partners" className={styles.link}>
							Partners
						</Link>
					</div>
				</div>
				<div className={styles.center}>
					<div className={styles.centerLeft}>
						<Button
							className={`${design.button_green} ${styles.btn}`}
							href="https://pinksale.finance/"
							target="_blank"
							disableRipple
						>
							<Typography>BUY $FROGE</Typography>
						</Button>
						<Button
							className={`${design.button_white} ${styles.btn}`}
							href="https://gleam.io/DC1de/20x-froge-whitelist-spot-giveaway"
							target="_blank"
							disableRipple
						>
							<Typography>WHITELIST</Typography>
						</Button>
					</div>
					<div className={styles.centerRight}>
						<Button
							className={`${design.button_social} ${styles.socialBtn}`}
							href="https://t.me/FrogeBNB"
							target="_blank"
							disableRipple
						>
							<span>
								<Image
									src={telegram}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
							</span>
							<Typography>Join Telegram</Typography>
						</Button>
						<Button
							className={`${design.button_social} ${styles.socialBtn}`}
							href="https://x.com/FrogeBNB"
							target="_blank"
							disableRipple
						>
							<span>
								<Image
									src={twitterX}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
							</span>
							<Typography>VIEW X.COM</Typography>
						</Button>
					</div>
				</div>
				<div className={styles.bottom}>
					<Typography>
						© 2025 FROGE — All rights reserved. <br></br>{' '}
						<br></br> *Investing in meme tokens involves a high
						level of risk and may not be suitable for all investors.
						Always do your own research and invest responsibly.
					</Typography>
				</div>
			</div>
		</div>
	);
}
