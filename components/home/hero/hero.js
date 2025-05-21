// >> Modules
import styles from './hero.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import twitterX from '@/public/images/twitterX.svg';
import telegram from '@/public/images/telegram.svg';
import heroImg from '@/public/images/heroImg.png';

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
						THIS IS BIRDO <span>THE BIRD</span>
					</Typography>
					<Typography className={styles.desc} data-aos="fade-right">
						The first bird on the BSC (BEP-20), inspired by Pepe The
						Frog concept. Flight mode: <span>ACTIVATED</span>
						<br></br>
						CA: 0x0000000000000000000000000000000000000000
					</Typography>
					<div
						className={styles.contentButtons}
						data-aos="fade-right"
					>
						<Button
							className={`${design.button_brown} ${styles.longBtn}`}
							href="https://pinksale.finance/"
							target="_blank"
							disableRipple
						>
							<Typography>BUY $BIRD</Typography>
						</Button>
						<Button
							className={`${design.button_social} ${styles.socialBtn}`}
							href="https://t.me/BirdoBNB"
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
							href="https://x.com/BirdoBNB"
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
