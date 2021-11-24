import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { Draggable } from 'react-beautiful-dnd-next';
import * as ReactContextMenu from '@radix-ui/react-context-menu';

import styles from './styles.module.css';
import userAvatar from '../../../assets/images/avatar.jpg';
import { TaskType } from '../../../types/TaskType';
import ContextMenu from './ContextMenu';

interface IProps {
  column: { name: string; icon: ReactElement; items: Array<TaskType> };
}

const DraggableTask: FC<IProps> = ({ column }) => {
  return (
    <>
      {column['items'].map((item, index) => (
        <ReactContextMenu.Root key={item.id}>
          <ReactContextMenu.Trigger>
            <Draggable draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <div
                  className={styles.Task}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}>
                  <div className={styles.TaskHeader}>
                    <p title={item?.title}>{item?.title}</p>
                    <Image
                      alt='Pooria Faramarzian'
                      width='19'
                      height='19'
                      src={userAvatar}
                      className={styles.Avatar}
                    />
                    <div className={styles.AvatarStatus} />
                  </div>
                  <div className={styles.TaskFooter}>
                    <span title={item.priority.title + ' Task'}>
                      {item.priority.icon}
                    </span>
                    <span title={column.name}>
                      {column.icon}
                      {column.name}
                    </span>
                  </div>
                </div>
              )}
            </Draggable>
          </ReactContextMenu.Trigger>
          <ContextMenu taskId={item.id} />
        </ReactContextMenu.Root>
      ))}
    </>
  );
};

export default DraggableTask;
