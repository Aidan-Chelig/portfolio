import { useEffect, useRef } from 'react';
import { Box, BoxProps, Center } from '@chakra-ui/react';

function Playground({ children, w = 'full', h = '80vh', ...props }: BoxProps) {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!!root.current && !!canvas.current) {
      canvas.current.width = root.current.offsetWidth;
      canvas.current.height = root.current.offsetHeight;
    }
  }, [root, canvas]);

  useEffect(() => {
    import('@portfolio/webgl').then(({ FolioClient }) => {
      if (!!canvas.current) {
        const gl = canvas.current.getContext('webgl');
        let n = Math.floor(Math.random() * 3);
        const client = new FolioClient(gl as any, n);

        const render = () => {
          client.update();
          client.render();
          requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
      }
    });
  }, [canvas]);

  return (
    <Box position="relative" w={w} h={h} ref={root} {...props}>
      <canvas ref={canvas} />
      <Center position="absolute" top={0} w="full" h="full">
        {children}
      </Center>
    </Box>
  );
}

export default Playground;
