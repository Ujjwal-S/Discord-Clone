const CreateNewServer = () => {
    return (
        <div className="p-1 w-72 md:w-[500px]">
            <div className="w-full mt-5">
                <label className="uppercase mb-2 block text-xs font-bold tracking-wide" htmlFor="new-server-name">Server Name <span className="text-red-400">*</span></label>
                <input type="password" className="w-full h-10 p-[10px] border-none rounded-sm outline-none text-white bg-[color:#202225]" name="new-server-name" id="new-server-name" autoComplete="false" autoCorrect="false" autoCapitalize="false" spellCheck="false" />
            </div>
            <div className="flex w-full justify-between items-end my-4">
                <label className="uppercase mb-2 inline-block text-xs font-bold tracking-wide">Choose Server Image <span className="text-red-400">*</span></label>
                <label className="uppercase inline-block text-xs font-bold tracking-wide border border-gray-600 p-2 py-1.5 cursor-pointer text-emerald-500 hover:bg-[#303030] rounded-sm" htmlFor="new-server-image">Browse</label>
                <input type="file" className="hidden" name="new-server-image" id="new-server-image" multiple={false} accept="image/*"/>
            </div>
        </div>
    )
}

export default CreateNewServer;