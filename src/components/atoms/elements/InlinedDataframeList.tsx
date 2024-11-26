import Stack from '@mui/material/Stack';

import type { IDataframeElement } from '../../../../libs/react-client/src/types';

import { DataframeElement } from './Dataframe';

interface Props {
  items: IDataframeElement[];
}

const InlinedDataframeList = ({ items }: Props) => (
  <Stack spacing={1}>
    {items.map((element, i) => {
      return (
        <div
          key={i}
          style={{
            height: 450,
            maxWidth: 'fit-content'
          }}
        >
          <DataframeElement element={element} />
        </div>
      );
    })}
  </Stack>
);

export { InlinedDataframeList };
