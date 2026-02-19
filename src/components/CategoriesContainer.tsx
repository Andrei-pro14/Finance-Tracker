import {Layers2} from "lucide-react";

function CategoriesContainer() {

    return (
        <div
            className={`flex flex-col min-w-140 h-80 border border-gray-200 shadow-xl rounded-xl`}
        >
            <div className="flex w-full p-8 gap-8 items-center justify-center h-16 border border-gray-300 border-t-0 border-l-0 border-r-0">
            <span>
            <Layers2 size={30} className="text-gray-500" />
          </span>
                <h1 className="flex font-semibold text-2xl">Expenses & Incomes Category</h1>
            </div>
            <div className="flex flex-col gap-5 w-full p-7 px-22">
                <div className="flex flex-row items-center">
                    <div className="flex justify-center items-center w-15 h-8 mr-5 border border-gray-300 border-t-0 border-b-0 border-l-0">
                        <div className={`flex justify-center items-center w-13 h-6 bg-[#83DB7B] rounded-sm`}>
                            <h1 className="text-sm text-black">Home</h1>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#4CAF50] rounded-sm`}>
                            <h1 className="text-sm text-white">Utilities</h1>
                        </div>
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#2196F3] rounded-sm`}>
                            <h1 className="text-sm text-white">Phone & Internet</h1>
                        </div>

                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex justify-center items-center w-15 h-8 mr-5 border border-gray-300 border-t-0 border-b-0 border-l-0">
                        <div className={`flex justify-center items-center p-2 min-w-10 h-5 bg-[#FFB4A9] rounded-sm`}>
                            <h1 className="text-sm text-black">Shopping</h1>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#9E9E9E] rounded-sm`}>
                            <h1 className="text-sm text-white">Cleaning</h1>
                        </div>
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#E91E63] rounded-sm`}>
                            <h1 className="text-sm text-white">Clothing</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex justify-center items-center w-15 h-6 mr-5 border border-gray-300 border-t-0 border-b-0 border-l-0">
                        <div className={`flex justify-center items-center w-13 h-6 bg-[#FFF2AE] rounded-sm`}>
                            <h1 className="text-sm text-black">Fun</h1>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#FF9800] rounded-sm`}>
                            <h1 className="text-sm text-white">Restaurant</h1>
                        </div>
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#673AB7] rounded-sm`}>
                            <h1 className="text-sm text-white">Streaming</h1>
                        </div>
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#F44336] rounded-sm`}>
                            <h1 className="text-sm text-white">Sport</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex justify-center items-center w-15 h-8 mr-5 border border-gray-300 border-t-0 border-b-0 border-l-0">
                        <div className={`flex justify-center items-center w-13 h-6 bg-[#D2E4FF] rounded-sm`}>
                            <h1 className="text-sm text-black">Car</h1>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#795548] rounded-sm`}>
                            <h1 className="text-sm text-white">Fuel</h1>
                        </div>
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#607D8B] rounded-sm`}>
                            <h1 className="text-sm text-white">Insurance</h1>
                        </div>
                        <div className={`flex justify-center items-center p-2 min-w-13 h-6 bg-[#FFC107] rounded-sm`}>
                            <h1 className="text-sm text-white">Tolls</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default  CategoriesContainer