import { FC } from 'react';

import { CloseIcon, ProfileIcon } from '../../Icon';
import { useModal } from '../../../../providers/Modal';
import styles from './Header.module.css';


interface IProps {
  projectName: string;
}

const Header: FC<IProps> = props => {
  const { projectName } = props;

  const { closeModal } = useModal();

  return (
    <header className={styles.Header}>
      {/* some info about the content */}
      <div className={styles.Info}>
        <h5 className={styles.ProjectName} title='Project name'>
          <ProfileIcon />
          {projectName}
        </h5>
        <p> › New task</p>
      </div>
      {/* use to close the modal */}
      <button
        title='Close modal'
        className={styles.CloseModalButton}
        onClick={closeModal}>
        <CloseIcon />
      </button>
    </header>
  );
};

export default Header;
