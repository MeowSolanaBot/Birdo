// >> Modules
import styles from './about.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import aboutImg from '@/public/images/aboutImg.png';

// >> Script
export default function About(props) {
	return (
		<div className={styles.section} id="About">
			<div className={styles.inside}>
				<div className={styles.content}>
					<Typography
						variant="h2"
						className={styles.title}
						data-aos="fade-left"
					>
						ABOUT{'  '}
						<span>FROGE</span>
					</Typography>
					<Typography className={styles.desc} data-aos="fade-left">
						$FROGE is not just a meme; he's a swamp-born signal of chaos, freedom, and digital rebellion. Froge hops with purpose, fueled by irony, driven by community. Same path as Pepe. Just wilder, greener, and way less serious.
					</Typography>
					<div className={styles.contentButtons} data-aos="fade-left">
						<Button
							className={`${design.button_green} ${styles.longBtn}`}
							href="https://pinksale.finance"
							target="_blank"
							disableRipple
						>
							<Typography>BUY $FROGE</Typography>
						</Button>
					</div>
				</div>
				<div className={styles.media} data-aos="fade-right">
					<Image
						src={aboutImg}
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
