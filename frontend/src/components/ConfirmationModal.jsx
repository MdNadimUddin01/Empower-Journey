import IconBtn from "./button/IconBtn";

export default function ConfirmationModal({ modalData }) {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-[#4C5B5C] bg-[#1F2732] p-6">
        <p className="text-2xl font-semibold text-[#F2F2F2]">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-[#A6B0B5]">
          {modalData?.text2}
        </p>
        <div className="flex items-center gap-x-4">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
          />
          <button
            className="cursor-pointer rounded-md bg-yellow-400 py-[8px] px-[20px] font-semibold text-[#1F2732]"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
}