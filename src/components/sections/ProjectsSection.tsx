import React from 'react';
import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  main: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundColor: 'var(--dark-background-color-gray)',
  },
})


const ProjectsSection: React.FC = () => {
  return (
    <div  className={stylex(styles.main)}>
    </div>
  );
}

export default ProjectsSection;
