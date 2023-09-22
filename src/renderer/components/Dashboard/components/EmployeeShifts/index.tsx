import React from 'react';
import LeftChevronSquareSvg from 'renderer/assets/svg/leftChevronSquareSvg';
import RightChevronSquareSvg from 'renderer/assets/svg/rightChevronSquareSvg';
import AvatarSvg from 'renderer/assets/svg/AvatarSvg';
import classes from './styles.module.css';

interface DateBoxProps {
  date: string;
}

interface TimeBoxItemProps {
  time: string;
}

interface ScheduleProps {
  name: string;
  slots: string[];
}
interface AvatarProps {
  name: string;
}
const dates = [
  'SUN-21',
  'MON-22',
  'TUE-23',
  'WED-24',
  'THU-25',
  'FRI-26',
  'SAT-27',
];

const times = [
  '18:00 PM - 19:00 PM',
  '09:00 AM - 10:00 AM',
  '11:00 AM - 12:00 PM',
  '18:00 PM - 19:00 PM',
  '18:00 PM - 19:00 PM',
  '13:00 PM - 14:00 PM',
  '15:00 PM - 16:00 PM',
];

const timeSlotsOfUsers = [
  {
    avatar: <AvatarSvg />,
    name: 'Sharad',
    slots: times,
  },
  {
    avatar: <AvatarSvg />,
    name: 'Mitchelle',
    slots: times,
  },
  {
    avatar: <AvatarSvg />,
    name: 'Dickson',
    slots: times,
  },
  {
    avatar: <AvatarSvg />,
    name: 'Tisha',
    slots: times,
  },
];
function AvatarWithName(props: AvatarProps) {
  const { name } = props;
  return (
    <div className={classes.avatarItem}>
      <AvatarSvg />
      <div className={classes.avatarText}>{name}</div>
    </div>
  );
}

function DateBox(props: DateBoxProps) {
  const { date } = props;
  return <div className={classes.dateBoxItem}>{date}</div>;
}

function TimeBoxItem(props: TimeBoxItemProps) {
  const { time } = props;
  return <div className={classes.timeBoxItem}>{time}</div>;
}

function Timeslots(props: ScheduleProps) {
  const { name, slots } = props;
  return (
    <div className={classes.timeBoxParentWrapper}>
      <AvatarWithName name={name} />
      <div className={classes.timeBoxItemsOuterWrapper}>
        {slots.map((slot, index) => (
          <TimeBoxItem time={slot} key={index} />
        ))}
      </div>
    </div>
  );
}
function EmployeeShiftsBox() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <div className={classes.leftSideWrapper}>
          <LeftChevronSquareSvg />
        </div>
        <div className={classes.dateBoxItemsWrapper}>
          {dates.map((date, index) => (
            <DateBox date={date} key={index} />
          ))}
        </div>
        <div>
          <RightChevronSquareSvg />
        </div>
      </div>
      <div className={classes.slotWrapper}>
        {timeSlotsOfUsers.map(({ name, slots }, index) => (
          <Timeslots name={name} slots={slots} key={index} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeShiftsBox;
