import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./department.css"
import { useState } from 'react';
type Props = {
  item: {
    department: string,
    sub_departments: Array<string>
  }
}
const Department = (props: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [checked, setChecked] = useState(Array(props?.item?.sub_departments.length).fill(false));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((arr) => [...arr.fill(event.target.checked)]);
  }

  const handleChange2 = (index: number) => {
    const arr = [...checked];
    arr[index] = !arr[index];
    setChecked(arr);
  }

  return (
    <div className='departTable'>
      <div className='department'>
        <div className='departmentName' onClick={() => setIsExpand(!isExpand)}>
          {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        <Checkbox onChange={handleChange} checked={!checked.includes(false)} />{props.item.department} {`(${props?.item?.sub_departments.length})`}
      </div>
      <div className="subDepartment">
        {isExpand && props?.item?.sub_departments.map((d, index) => (
          <div className='subDepartments' key={index}>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={() => handleChange2(index)} checked={checked[index]} />} label={d} />
            </FormGroup>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Department