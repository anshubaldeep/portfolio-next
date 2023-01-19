const { useState } = require('react');

const useStore = () => {
  const [showModal, setShowModalFunc] = useState(false);
  const setShowModal = (value) => {
    setShowModalFunc(value);
  };
  return { showModal, setShowModal };
};

export default useStore;
