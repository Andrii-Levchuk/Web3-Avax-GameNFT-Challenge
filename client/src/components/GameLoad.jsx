import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from './CustomButton'
import { useGlobalContext } from '../context'
import { player01, player02 } from '../assets'
import styles from '../styles'

const GameLoad = () => {
	const { walletAddress } = useGlobalContext
	const navigate = useNavigate()

	return (
		<div className={`${styles.flexBetween} ${styles.gameLoadContainer}`}>
			<div className={styles.gameLoadBtnBox}>
				<CustomButton
					title='Choose Battleground'
					handleClick={() => navigate('/battleground')}
					restStyles='mt-6'
				/>
			</div>
			<div className={`flex-1 ${styles.flexCenter} flex-col`}>
				<h1 className={`${styles.headText} text-center`}>
					Waiting for a <br /> worthy opponent
				</h1>
				<p className={styles.gameLoadText}>
					Protip: while you are waitng, choose your preffered battleground
				</p>
				<div className={styles.gameLoadPlayersBox}>
					<div className={`${styles.flexCenter} flex-col`}>
						<img
							src={player01}
							alt='Player1'
							className={styles.gameLoadPlayerImg}
						/>
						<p className={styles.gameLoadPlayerText}>
							{['0x4A0351B7Cf99d2D5c3cB8F78dd413dA1a4Be58CC'].slice(0, 30)}
						</p>
					</div>
					<h2 className={styles.gameLoadVS}>Vs</h2>
					<div className={`${styles.flexCenter} flex-col`}>
						<img
							src={player02}
							alt='Player1'
							className={styles.gameLoadPlayerImg}
						/>
						<p className={styles.gameLoadPlayerText}>
						????????????
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GameLoad
