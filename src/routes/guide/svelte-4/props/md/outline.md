- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
- role = ctx.role || 'img';
- withEvents = ctx.withEvents || false;
- title: TitleType = {};
- desc: DescType = {};
- strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | undefined =  ctx.strokeLinecap || 'round';
- strokeWidth = ctx.strokeWidth || '2';
- ariaLabel = '<icon file name>';