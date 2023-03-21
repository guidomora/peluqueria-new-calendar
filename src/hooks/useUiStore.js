import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal, onSetNombre } from "../store/ui/uiSlice";

const useUiStore = (nombre) => {
  const dispatch = useDispatch();
  const { isDateModalOpen, nombree } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const setNombre = (nombree) => {
    dispatch(onSetNombre(nombree))
  }

  return {
    isDateModalOpen,

    openDateModal,
    closeDateModal,
    setNombre
  };
};

export default useUiStore;
