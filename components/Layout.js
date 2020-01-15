import React, { useState, useCallback, } from 'react';
import Link from 'next/link';
import { Layout, Icon, Input, Avatar } from 'antd';
import Container from './Container';

const { Header, Content, Footer } = Layout;

export default function BaseLayout({ children, pagePathName }) {
	const [search, setSearch] = useState('');
	const handleSearchChange = useCallback(e => {
		setSearch(e.target.value);
	}, []);

	const handleSearch = useCallback(() => {
		console.log(233333);
	});
	const navData = [
		{pathname: '/', name: 'home'},
		{pathname: '/about', name: 'about'},
	];
	
	return (
		<Layout className="layout">
			<Header>
				<Container element={<div className="header-inner" />}>
					<div className="header-left">
						<div>
							<Icon
								type="github"
								style={{
									color: 'white',
									fontSize: 40,
									display: 'block',
									paddingTop: 10,
									marginRight: 20,
								}}
							/>
						</div>
						<div>
							<Input.Search
								value={search}
								onChange={handleSearchChange}
								placeholder="搜索"
								onSearch={handleSearch}
							/>
						</div>
						<nav>
							{navData.map(item => (
									<Link href={item.pathname} key={item.pathname}>
										<span className={`${item.pathname === pagePathName ? 'selected' : ''}`}>
											{item.name}
										</span>
									</Link>
								))}
						</nav>
					</div>

					<div className="header-right">
						<div className="user">
							<Avatar size={40} />
						</div>
					</div>
				</Container>
			</Header>
			<Content>
				<div className="content">
					<Container>{children}</Container>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>develop by broken man @ <a href="https://github.com/poyiding">https://github.com/poyiding</a></Footer>
			<style jsx>{`
        .content {
          min-height: 100%;
          background-color: #fff;
					padding: 8px 0;
					position: relative;
        }
        .header-inner {
          display: flex;
          justify-content: space-between;
        }
        .header-left {
          display: flex;
          justify-content: flex-start;
        }
        .header-right {
          display: flex;
          justify-content: flex-end;
        }
				nav span{
					color: rgba(255,255,255, 0.7);
					padding: 10px 5px;
					margin-left: 10px;
				}
				nav .selected {
					color: #fff;
					font-weight: 600;
				}
				nav span:hover {
					cursor: pointer;
				}
      `}</style>
			<style global jsx>{`
        #__next {
          height: 100%;
        }
        .ant-layout {
          height: 100%;
        }
        .ant-layout-header {
          padding-left: 0;
          padding-right: 0;
        }
       
      `}</style>
		</Layout>
	);
}
