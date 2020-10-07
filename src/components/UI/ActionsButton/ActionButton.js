import React from 'react';
import { Button, Tooltip } from 'antd';
import { CloseCircleTwoTone, ProfileTwoTone } from '@ant-design/icons';
import styles from './ActionButton.module.css';

const ActionButton = (props) => {
  return (
    <div className={styles.action__buttons}>
      <div>
        <Tooltip title="Delete this meal">
          <Button
            onClick={props.onDeleteFav}
            type="link"
            icon={<CloseCircleTwoTone twoToneColor="#eb2f96" />}
          />
        </Tooltip>
      </div>
      <div>
        <Tooltip title="Show all ingredients">
          <Button
            onClick={props.onShowIng}
            type="link"
            icon={<ProfileTwoTone />}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default ActionButton;
