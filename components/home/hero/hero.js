// >> Modules
import styles from './hero.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
	ssr: false,
});

import twitterX from '@/public/images/twitterX.svg';
import telegram from '@/public/images/telegram.svg';
import heroImg from '@/public/images/heroImg.png';
import heroImgAnim from '@/public/images/heroImg.json';

// >> Script
export default function Hero(props) {
	return (
		<div className={styles.section} id="Home">
			<div className={styles.inside}>
				<div className={styles.content}>
					<Typography
						variant="h1"
						className={styles.title}
						data-aos="fade-right"
					>
						FROGE <span>THE FROG</span>
					</Typography>
					<Typography className={styles.desc} data-aos="fade-right">
						Discord&apos;s cult emoji turns memecoin on BNB. Same path as Pepe, but greener. Much greener.<br></br>
						CA: 0x4258eae51CDFFa6099f1B991a129Fc26A4462Df5
					</Typography>
					<div
						className={styles.contentButtons}
						data-aos="fade-right"
					>
						<Button
							className={`${design.button_green} ${styles.longBtn}`}
							href="https://www.pinksale.finance/launchpad/bsc/0xe2017Cf63bd7593Fb805a4E2A3C4ecA05E4D609b"
							target="_blank"
							disableRipple
						>
							<Typography>BUY $FROGE</Typography>
						</Button>
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
				<div className={styles.media} data-aos="fade-left">
					{/* <Lottie animationData={heroImgAnim} autoplay /> */}
					<Image
						src={heroImg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
			</div>
		</div>
	);
}
