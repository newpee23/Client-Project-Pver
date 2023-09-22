import React, { useCallback, useEffect, useState  } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import '../../assets/css/SingInCss.css'

import FormSingIN from '../molecules/auth/FormSingIN';
import { useAppSelector } from '../../store/store';
import Loading from '../atoms/Loading';

const SingIn = () => {
  const [value, setValue] = useState<string>('1');

  const { loading  } = useAppSelector((state) => state?.auth);

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }, []);

  return (
    loading ? (
      <Loading setHeight=""/>
    ) : (
      <section>
        <div className="h-screen flex items-center justify-center">
          <div className="bg-white w-full m-5 p-5 sml:w-[460px] sml:p-10 text-center rounded-lg shadow-shadowDiv">
            <div className="relative mb-5">
              <SupervisedUserCircleIcon className="z-50 h-24 sml:h-32 w-auto absolute top-[-25px] sml:top-[-45px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-icon-login" />
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                  <TabList onChange={handleChange} aria-label="lab API tabs" className="rounded-tl-md rounded-tr-md" indicatorColor="secondary" textColor="secondary">
                    <Tab label={<span className="normal-case text-base sml:text-lg font-medium text-purple-600">Sing In</span>} value="1" className="w-1/2" />
                    <Tab label={<span className="normal-case text-base sml:text-lg font-medium text-purple-600">Sing Up</span>} value="2" className="w-1/2" />
                  </TabList>
                </Box>
                <TabPanel value="1" className="p-0 pt-10"><FormSingIN /></TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </section>
    )
  )
}

export default SingIn