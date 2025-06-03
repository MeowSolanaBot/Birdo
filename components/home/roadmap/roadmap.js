// >> Modules
import styles from './roadmap.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import roadmapIcon from '@/public/images/roadmapIcon.png';
import roadmapLine from '@/public/images/roadmapLine.png';

const faces = 10;
const filledFaces = 4;

// >> Script
export default function Roadmap(props) {
	return (
		<div className={styles.section} id="Roadmap">
			<div className={styles.inside}>
				<Typography
					variant="h2"
					className={styles.title}
					data-aos="zoom-in"
				>
					ROADMAP
				</Typography>
				<div className={styles.content}>
					<div className={styles.oneSide} data-side="left">
						<div
							className={styles.roadmapLine}
							data-aos="fade-right"
						>
							<Image
								src={roadmapLine}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.onePhase} data-aos="fade-right">
							<div className={styles.phaseTitle}>
								<Typography>PHASE: EGG DROP</Typography>
							</div>
							<div className={styles.points}>
								<Typography className={styles.onePoint}>
									• Website + X (Twitter) + Telegram Setup
								</Typography>
								<Typography className={styles.onePoint}>
									• Community Building & WL Giveaway
								</Typography>
								<Typography className={styles.onePoint}>
									• CoinSult Token Audit
								</Typography>
								<Typography className={styles.onePoint}>
									• Presale Marketing Campaign
								</Typography>
								<Typography className={styles.onePoint}>
									• Pinksale Presale
								</Typography>
							</div>
						</div>
						<div className={styles.onePhase} data-aos="fade-right">
							<div className={styles.phaseTitle}>
								<Typography>PHASE: FIRST FLIGHT</Typography>
							</div>
							<div className={styles.points}>
								<Typography className={styles.onePoint}>
									• PancakeSwap $BIRD Launch
								</Typography>
								<Typography className={styles.onePoint}>
									• CMC/GC Fast Track Apply
								</Typography>
								<Typography className={styles.onePoint}>
									• Contract Renounced
								</Typography>
								<Typography className={styles.onePoint}>
									• Community Marketing Push
								</Typography>
								<Typography className={styles.onePoint}>
									• Viral Meme Contests + Influencer Outreach
								</Typography>
							</div>
						</div>
					</div>
					<div className={styles.faces}>
						{[...Array(faces)].map((_, i) => (
							<div
								key={i}
								className={styles.oneFace}
								data-filled={i + 1 <= filledFaces}
							>
								<Image
									src={roadmapIcon}
									alt=""
									data-aos="zoom-in"
								/>
							</div>
						))}
					</div>
					<div className={styles.oneSide} data-side="right">
						<div
							className={styles.roadmapLine}
							data-aos="fade-left"
						>
							<Image
								src={roadmapLine}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.onePhase} data-aos="fade-left">
							<div className={styles.phaseTitle}>
								<Typography>PHASE: FEATHERSTORM</Typography>
							</div>
							<div className={styles.points}>
								<Typography className={styles.onePoint}>
									• NFT Animated Collection
								</Typography>
								<Typography className={styles.onePoint}>
									• Community DAO
								</Typography>
								<Typography className={styles.onePoint}>
									• Staking Launch
								</Typography>
								<Typography className={styles.onePoint}>
									• KOLs Collaboration
								</Typography>
								<Typography className={styles.onePoint}>
									• Birdo Merch Drop
								</Typography>
							</div>
						</div>
						<div className={styles.onePhase} data-aos="fade-left">
							<div className={styles.phaseTitle}>
								<Typography>PHASE: FULL WINGSPAN</Typography>
							</div>
							<div className={styles.points}>
								<Typography className={styles.onePoint}>
									• $BIRD CEX Listing
								</Typography>
								<Typography className={styles.onePoint}>
									• CertiK Audit Process
								</Typography>
								<Typography className={styles.onePoint}>
									• Cross-Chain Expand
								</Typography>
								<Typography className={styles.onePoint}>
									• BIRDO NFT Marketplace
								</Typography>
								<Typography className={styles.onePoint}>
									• BIRDO Launchpad
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
