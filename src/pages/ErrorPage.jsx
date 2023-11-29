import { ErrorComponent } from '../components/ErrorComponent'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function ErrorPage() {
    return (
        <>
            <Header />
            <ErrorComponent />
            <Footer />
        </>
    )
}
