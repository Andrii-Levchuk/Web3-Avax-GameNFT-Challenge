import { ethers } from "ethers";
import { providers } from "web3modal";

import { ABI } from "../contract";

const AddNewEvent = (eventFilter, provider, cb) => {
  provider.removeListener(eventFilter) // not have multiple listeners for the same event

  provider.on(eventFilter, (Logs) => {

    const parseLog = (new ethers.utils.Interface(ABI)).parseLog(Logs)

    cb(parseLog)

  })
}

export const createEventListeners = ({
	navigate,
	contract,
	provider,
	walletAddress,
	setShowAlert,
}) => {
	const NewPlayerEventFilter = contract.filters.NewPlayer()

	AddNewEvent(NewPlayerEventFilter, provider, ({ args }) => {
		console.log('New Player Created', args)

		if (walletAddress === args.owner) {
			setShowAlert({
				status: true,
				type: 'success',
				message: 'Player has been successfully registred',
			})
		}
	})
}