import { Dialog } from "radix-ui";

import { type SubmitEvent } from "react";

/*
{
  "title": "Example listing",
  "description": "Example description",
  "end_at": "2026-10-09T08:30",
  "timezone": "Europe/London"
}



*/
type CreateListingButtonProp = {
	handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export function CreateListingButton(
{handleSubmit} : CreateListingButtonProp) {

	return (
	<Dialog.Root >

		<Dialog.Trigger asChild>
		<button className="border justify-center rounded select-none ">
		+ Create New Listing
		</button>
		</Dialog.Trigger>




		<Dialog.Portal>
			<Dialog.Overlay className="dialog-overlay fixed inset-0 bg-black/50"/>			
			<Dialog.Content className="dialog-content bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray p-[25px] shadow-[var(--shadow-6)] focus:outline-none">				
				<Dialog.Title className="m-0 text-[17px] font-medium text-pink">Create New Listing</Dialog.Title>


				<form onSubmit={handleSubmit}>
				<fieldset className="mb-[15px] flex items-center gap-5">
				<label className="w-[90px] text-right text-[15px] text-purple" htmlFor="name">Title</label>
				<input
				className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-purple shadow-[0_0_0_1px] shadow-purple outline-none focus:shadow-[0_0_0_2px] focus:shadow-purple"
				id="name"
				placeholder="e.g. PS5 Controller"
				name="title"
				/>
				</fieldset>

				<h1>Empty Photo</h1>

				<fieldset className="mb-[15px] flex items-center gap-5">
				<label className="w-[90px] text-right text-[15px] text-purple" htmlFor="username">Description</label>
				<input
				className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-purple shadow-[0_0_0_1px] shadow-purple outline-none focus:shadow-[0_0_0_2px] focus:shadow-purple"
				id="username"
				placeholder="e.g. working condition"
				name = "description"/>
				</fieldset>

				<fieldset className="mb-[15px] flex items-center gap-5">
				<label className="w-[90px] text-right text-[15px] text-purple" htmlFor="username">End at</label>
				<input
				className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-purple shadow-[0_0_0_1px] shadow-purple outline-none focus:shadow-[0_0_0_2px] focus:shadow-purple"
				id="username"
				type="datetime-local"
				name="end_at"/>
				</fieldset>


				<div className="mt-[25px] flex justify-end">
				<button type="submit" className="inline-flex h-[35px] items-center justify-center rounded bg-green px-[15px] font-medium leading-none text-green outline-none outline-offset-1 hover:bg-green focus-visible:outline-2 focus-visible:outline-green select-none">
				Create Listing
				</button>
				</div>

				</form>

				<Dialog.Close asChild>
				<button
				className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full  bg-gray hover:bg-purple focus:shadow-[0_0_0_2px] focus:shadow-purple focus:outline-none text-red"
				aria-label="Close"
				>X
				</button>
				</Dialog.Close>



			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
	);
}
