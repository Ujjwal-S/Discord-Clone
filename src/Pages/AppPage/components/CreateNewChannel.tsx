import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const CreateNewChannel = (props: {onClose: () => void}) => {
    return (
        <Modal heading="Create New Channel" onClose={props.onClose}>
            <div className="p-1 w-72 md:w-[500px]">
                <div className="w-full mt-5">
                    <label className="uppercase mb-2 block text-xs font-bold tracking-wide" htmlFor="new-channel-name">Channel Name <span className="text-red-400">*</span></label>
                    <input type="text" className="w-full h-10 p-[10px] border-none rounded-sm outline-none text-white bg-[color:#202225]" name="new-channel-name" id="new-channel-name" autoComplete="false" autoCorrect="false" autoCapitalize="false" spellCheck="false" />
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <Button size="sm" color="purple" width="contain">
                    Create Channel
                </Button>
            </div>
        </Modal>
    )
}

export default CreateNewChannel;